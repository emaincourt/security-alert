// https://github.com/azu/github-webhook-SecurityVulnerability-test/network/alert/package-lock.json/axios/open
//
import { fetchVulnerabilityAlerts } from "./VulnerabilityAlerts";
import { createIssue } from "./issue";

export type CreatedOptions = {
    token: string;
    dryRun?: boolean;
};

export async function createFromURL(url: string, options: CreatedOptions) {
    const dryRun = options.dryRun !== undefined ? options.dryRun : false;
    const pattern = /^https:\/\/github.com\/(?<owner>[0-9a-zA-Z-_.]+)\/(?<repo>[0-9a-zA-Z-_.]+)\/network\/alert\/(?<filepath>.+)\/(?<pacakgeName>[0-9a-zA-Z-_.]+)\/(open|closed)/;
    const matchObj = pattern.exec(url);
    if (!matchObj || !matchObj.groups) {
        throw new Error("Should set security alert url.\n" +
            "\n" +
            "Example: https://github.com/owner/reponame/network/alert/package-lock.json/axios/open");
    }
    const owner: string = matchObj.groups.owner;
    const repo: string = matchObj.groups.repo;
    const filepath: string = matchObj.groups.filepath;
    const packageName: string = matchObj.groups.pacakgeName;
    const vulnerabilityAlerts = await fetchVulnerabilityAlerts({
        owner,
        repo,
        token: options.token
    });
    const targetAlert = vulnerabilityAlerts.find(alert => {
        return alert.vulnerableManifestPath === filepath && alert.securityVulnerability.package.name === packageName;
    });

    if (!targetAlert) {
        throw new Error("Not found security vulnerability for " + url);
    }
    const title = `Vulnerability found in ${targetAlert.securityVulnerability.package.name} ${targetAlert.securityVulnerability.vulnerableVersionRange}`;
    const body = `
## Vulnerability Information

- Package name:  [${targetAlert.securityVulnerability.package.name}](https://www.npmjs.com/package/${targetAlert.securityVulnerability.package.name}) 
- Vulnerable versions: ${targetAlert.securityVulnerability.vulnerableVersionRange}
- Patched version: ${targetAlert.securityVulnerability.firstPatchedVersion.identifier}
- GitHub Alert: <${url}>

## How to fix?

Upgrade ${targetAlert.securityVulnerability.package.name} to version ${targetAlert.securityVulnerability.firstPatchedVersion.identifier} or later. For example:

\`\`\`
"dependencies": {
  "${targetAlert.securityVulnerability.package.name}": ">=${targetAlert.securityVulnerability.firstPatchedVersion.identifier}"
}
\`\`\`

or…

\`\`\`
"devDependencies": {
  "${targetAlert.securityVulnerability.package.name}": ">=${targetAlert.securityVulnerability.firstPatchedVersion.identifier}"
}
\`\`\`

## Details

${
        targetAlert.securityAdvisory.references.map(reference => {
                return `- <${reference.url}>`;
            }
        ).join("\n")
        }`;
    if (dryRun) {
        console.log(`Create Issue
owner: ${owner}
repo: ${repo}
title: ${title}
body: ${body}
`);
        return;
    } else {
        return createIssue({
            owner,
            repo,
            title,
            body,
            token: options.token
        });
    }
}
