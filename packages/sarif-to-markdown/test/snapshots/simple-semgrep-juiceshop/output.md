# Report
## Results

- **[ERROR]** **[generic.secrets.security.detected-private-key.detected-private-key]**  `Private Key detected. This is a sensitive credential and should not be hardcoded here. Instead, store this in a separate, private file.`
- **[ERROR]** **[generic.secrets.security.detected-generic-secret.detected-generic-secret]**  `Generic Secret detected`
    - https://github.com/juice-shop/juice-shop/blob/master/data/static/users.yml#L150-150
- **[WARNING]** **[javascript.lang.security.audit.path-traversal.path-join-resolve-traversal.path-join-resolve-traversal]**  `Possible writing outside of the destination, make sure that the target path is nested in the intended destination`
    - https://github.com/juice-shop/juice-shop/blob/master/data/datacreator.ts#L26-26
    - https://github.com/juice-shop/juice-shop/blob/master/lib/startup/validatePreconditions.ts#L95-95
    - https://github.com/juice-shop/juice-shop/blob/master/models/index.ts#L31-31
    - https://github.com/juice-shop/juice-shop/blob/master/routes/fileUpload.ts#L47-48
    - https://github.com/juice-shop/juice-shop/blob/master/routes/vulnCodeSnippet.ts#L32-32
- **[WARNING]** **[javascript.lang.security.audit.detect-bracket-object-injection.detect-bracket-object-injection]**  `Detected user input used in bracket notation accessor. This could lead to object injection through property, which could grant access to every property available in the object and therefore sensitive information. Instead, avoid the use of user input in property name fields or create a whitelist of allowed input.`
    - https://github.com/juice-shop/juice-shop/blob/master/frontend/src/hacking-instructor/helpers/helpers.ts#L29-29
    - https://github.com/juice-shop/juice-shop/blob/master/lib/utils.ts#L276-276
    - https://github.com/juice-shop/juice-shop/blob/master/lib/utils.ts#L287-287
    - https://github.com/juice-shop/juice-shop/blob/master/routes/captcha.ts#L19-19
    - https://github.com/juice-shop/juice-shop/blob/master/routes/captcha.ts#L20-20
    - https://github.com/juice-shop/juice-shop/blob/master/routes/userProfile.ts#L40-40
    - https://github.com/juice-shop/juice-shop/blob/master/routes/videoHandler.ts#L58-58
    - https://github.com/juice-shop/juice-shop/blob/master/routes/vulnCodeSnippet.ts#L99-99
    - https://github.com/juice-shop/juice-shop/blob/master/routes/vulnCodeSnippet.ts#L203-203
    - https://github.com/juice-shop/juice-shop/blob/master/server.ts#L594-594
    - https://github.com/juice-shop/juice-shop/blob/master/server.ts#L606-606
- **[WARNING]** **[javascript.lang.security.audit.code-string-concat.code-string-concat]**  `User controlled data in eval\(\) or similar functions may result in Code Injection`
    - https://github.com/juice-shop/juice-shop/blob/master/data/static/codefixes/adminSectionChallenge_3.ts#L3-3
    - https://github.com/juice-shop/juice-shop/blob/master/data/static/codefixes/adminSectionChallenge_3.ts#L3-3
    - https://github.com/juice-shop/juice-shop/blob/master/lib/startup/validateChatBot.ts#L37-37
    - https://github.com/juice-shop/juice-shop/blob/master/lib/startup/validateConfig.ts#L109-109
    - https://github.com/juice-shop/juice-shop/blob/master/lib/startup/validateConfig.ts#L160-160
    - https://github.com/juice-shop/juice-shop/blob/master/routes/userProfile.ts#L52-52
    - https://github.com/juice-shop/juice-shop/blob/master/server.ts#L175-175
- **[WARNING]** **[javascript.lang.security.audit.detect-non-literal-fs-filename.detect-non-literal-fs-filename]**  `A variable is present in the filename argument of fs calls, this might allow an attacker to access anything on your system.`
    - https://github.com/juice-shop/juice-shop/blob/master/Gruntfile.js#L72-72
    - https://github.com/juice-shop/juice-shop/blob/master/routes/order.ts#L32-32
    - https://github.com/juice-shop/juice-shop/blob/master/routes/vulnCodeFixes.ts#L30-30
    - https://github.com/juice-shop/juice-shop/blob/master/routes/vulnCodeFixes.ts#L81-81
    - https://github.com/juice-shop/juice-shop/blob/master/routes/vulnCodeFixes.ts#L82-82
    - https://github.com/juice-shop/juice-shop/blob/master/rsn/rsnUtil.ts#L50-50
    - https://github.com/juice-shop/juice-shop/blob/master/rsn/rsnUtil.ts#L105-105
- **[WARNING]** **[javascript.lang.security.audit.detect-non-literal-regexp.detect-non-literal-regexp]**  `RegExp\(\) called with a variable, this might allow an attacker to DOS your application with a long-running regular expression.`
    - https://github.com/juice-shop/juice-shop/blob/master/routes/vulnCodeSnippet.ts#L103-103
    - https://github.com/juice-shop/juice-shop/blob/master/routes/vulnCodeSnippet.ts#L122-122
    - https://github.com/juice-shop/juice-shop/blob/master/routes/vulnCodeSnippet.ts#L124-124
- **[WARNING]** **[javascript.lang.security.audit.prototype-pollution.prototype-pollution-loop.prototype-pollution-loop]**  `Possibility of prototype polluting function detected. By adding or modifying attributes of an object prototype, it is possible to create attributes that exist on every object, or replace critical attributes with malicious ones. This can be problematic if the software depends on existence or non-existence of certain attributes, or uses pre-defined attributes of object prototype \(such as hasOwnProperty, toString or valueOf\). Possible mitigations might be: freezing the object prototype, using an object without prototypes \(via Object.create\(null\) \), blocking modifications of attributes that resolve to object prototype, using Map instead of object.`
    - https://github.com/juice-shop/juice-shop/blob/master/frontend/src/hacking-instructor/helpers/helpers.ts#L29-29
- **[WARNING]** **[javascript.lang.correctness.no-replaceall.no-replaceall]**  `The string method replaceAll is not supported in all versions of javascript, and is not supported by older browser versions. Consider using replace\(\) with a regex as the first argument instead like mystring.replace\(\/bad\/g, "good"\) instead of mystring.replaceAll\("bad", "good"\) \(https:\/\/discourse.threejs.org\/t\/replaceall-is-not-a-function\/14585\)`
    - https://github.com/juice-shop/juice-shop/blob/master/data/static/codefixes/restfulXssChallenge_2.ts#L59-59
    - https://github.com/juice-shop/juice-shop/blob/master/data/static/codefixes/restfulXssChallenge_2.ts#L59-59
- **[NOTE]** **[javascript.lang.security.audit.non-constant-sql-query.non-constant-sql-query]**  `Non-constant SQL query detected. Ensure this is not controlled by external data, otherwise this is a SQL injection.`
    - https://github.com/juice-shop/juice-shop/blob/master/data/static/codefixes/dbSchemaChallenge_1.ts#L5-5
    - https://github.com/juice-shop/juice-shop/blob/master/data/static/codefixes/dbSchemaChallenge_2_correct.ts#L5-8
    - https://github.com/juice-shop/juice-shop/blob/master/data/static/codefixes/dbSchemaChallenge_3.ts#L11-11
    - https://github.com/juice-shop/juice-shop/blob/master/data/static/codefixes/unionSqlInjectionChallenge_1.ts#L6-6
    - https://github.com/juice-shop/juice-shop/blob/master/data/static/codefixes/unionSqlInjectionChallenge_2_correct.ts#L5-8
    - https://github.com/juice-shop/juice-shop/blob/master/data/static/codefixes/unionSqlInjectionChallenge_3.ts#L10-10
    - https://github.com/juice-shop/juice-shop/blob/master/routes/login.ts#L33-33
    - https://github.com/juice-shop/juice-shop/blob/master/routes/search.ts#L17-17
- **[WARNING]** **[javascript.lang.security.audit.unknown-value-with-script-tag.unknown-value-with-script-tag]**  `Cannot determine what 'subs' is and it is used with a '&lt;script&gt;' tag. This could be susceptible to cross-site scripting \(XSS\). Ensure 'subs' is not externally controlled, or sanitize this data.`
    - https://github.com/juice-shop/juice-shop/blob/master/routes/videoHandler.ts#L68-68
- **[WARNING]** **[javascript.lang.security.detect-eval-with-expression.detect-eval-with-expression]**  `Detected eval\(variable\), which could allow a malicious actor to run arbitrary code.`
    - https://github.com/juice-shop/juice-shop/blob/master/routes/captcha.ts#L23-23
    - https://github.com/juice-shop/juice-shop/blob/master/routes/userProfile.ts#L33-33
- **[WARNING]** **[javascript.lang.security.detect-non-literal-require.detect-non-literal-require]**  `Detected the use of require\(variable\). Calling require with a non-literal argument might allow an attacker to load an run arbitrary code, or access arbitrary files.`
    - https://github.com/juice-shop/juice-shop/blob/master/models/index.ts#L31-31
- **[WARNING]** **[typescript.angular.security.audit.angular-domsanitizer.angular-bypasssecuritytrust]**  `Bypassing the built-in sanitization could expose the application to cross-site scripting \(XSS\).`
    - https://github.com/juice-shop/juice-shop/blob/master/data/static/codefixes/localXssChallenge_1.ts#L6-6
    - https://github.com/juice-shop/juice-shop/blob/master/data/static/codefixes/localXssChallenge_3.ts#L6-6
    - https://github.com/juice-shop/juice-shop/blob/master/data/static/codefixes/localXssChallenge_4.ts#L6-6
    - https://github.com/juice-shop/juice-shop/blob/master/data/static/codefixes/restfulXssChallenge_3.ts#L45-45
    - https://github.com/juice-shop/juice-shop/blob/master/data/static/codefixes/restfulXssChallenge_4.ts#L59-59
    - https://github.com/juice-shop/juice-shop/blob/master/data/static/codefixes/xssBonusChallenge_2.ts#L6-6
- **[ERROR]** **[contrib.nodejsscan.jwt_hardcoded.hardcoded_jwt_secret]**  `Hardcoded JWT secret was found. Store it properly in an environment variable.`
    - https://github.com/juice-shop/juice-shop/blob/master/lib/insecurity.js#L9-34
- **[WARNING]** **[contrib.nodejsscan.jwt_not_revoked.jwt_not_revoked]**  `No token revoking configured for `express-jwt`. A leaked token could still be used and unable to be revoked. Consider using function as the `isRevoked` option.`
    - https://github.com/juice-shop/juice-shop/blob/master/lib/insecurity.js#L32-32
    - https://github.com/juice-shop/juice-shop/blob/master/lib/insecurity.js#L33-33
- **[ERROR]** **[javascript.jsonwebtoken.security.jwt-hardcode.hardcoded-jwt-secret]**  `Hardcoded JWT secret or private key is used. This is a Insufficiently Protected Credentials weakness: https:\/\/cwe.mitre.org\/data\/definitions\/522.html Consider using an appropriate security mechanism to protect the credentials \(e.g. keeping secrets in environment variables: process.env.SECRET\)`
    - https://github.com/juice-shop/juice-shop/blob/master/lib/insecurity.js#L34-34
    - https://github.com/juice-shop/juice-shop/blob/master/lib/insecurity.js#L34-34
- **[WARNING]** **[javascript.lang.security.audit.unsafe-dynamic-method.unsafe-dynamic-method]**  `Using non-static data to retrieve and run functions from the object is dangerous. If the data is user-controlled, it may allow executing arbitrary code.`
    - https://github.com/juice-shop/juice-shop/blob/master/routes/chatbot.ts#L82-82
- **[NOTE]** **[generic.ci.security.use-frozen-lockfile.use-frozen-lockfile-npm]**  `To ensure reproducable and deterministic builds, use `npm ci` rather than `npm install` in scripts. This will use the lockfile rather than updating it.`
    - https://github.com/juice-shop/juice-shop/blob/master/.github/workflows/ci.yml#L31-31
    - https://github.com/juice-shop/juice-shop/blob/master/.github/workflows/ci.yml#L34-34
    - https://github.com/juice-shop/juice-shop/blob/master/.github/workflows/ci.yml#L36-36
    - https://github.com/juice-shop/juice-shop/blob/master/.github/workflows/ci.yml#L63-63
    - https://github.com/juice-shop/juice-shop/blob/master/.github/workflows/ci.yml#L65-66
    - https://github.com/juice-shop/juice-shop/blob/master/.github/workflows/ci.yml#L94-94
    - https://github.com/juice-shop/juice-shop/blob/master/.github/workflows/ci.yml#L97-98
    - https://github.com/juice-shop/juice-shop/blob/master/.github/workflows/ci.yml#L143-143
    - https://github.com/juice-shop/juice-shop/blob/master/.github/workflows/ci.yml#L145-146
    - https://github.com/juice-shop/juice-shop/blob/master/.github/workflows/ci.yml#L174-174
    - https://github.com/juice-shop/juice-shop/blob/master/.github/workflows/ci.yml#L176-177
    - https://github.com/juice-shop/juice-shop/blob/master/.github/workflows/ci.yml#L200-200
    - https://github.com/juice-shop/juice-shop/blob/master/.github/workflows/ci.yml#L202-203
    - https://github.com/juice-shop/juice-shop/blob/master/.github/workflows/ci.yml#L223-223
    - https://github.com/juice-shop/juice-shop/blob/master/.github/workflows/ci.yml#L224-224
    - https://github.com/juice-shop/juice-shop/blob/master/.github/workflows/ci.yml#L232-232
    - https://github.com/juice-shop/juice-shop/blob/master/.github/workflows/ci.yml#L233-233
    - https://github.com/juice-shop/juice-shop/blob/master/.github/workflows/lint-fixer.yml#L16-16
    - https://github.com/juice-shop/juice-shop/blob/master/.github/workflows/lint-fixer.yml#L19-19
    - https://github.com/juice-shop/juice-shop/blob/master/.github/workflows/lint-fixer.yml#L21-21
    - https://github.com/juice-shop/juice-shop/blob/master/.github/workflows/release.yml#L30-30
    - https://github.com/juice-shop/juice-shop/blob/master/.github/workflows/release.yml#L31-31
    - https://github.com/juice-shop/juice-shop/blob/master/.github/workflows/release.yml#L46-46
    - https://github.com/juice-shop/juice-shop/blob/master/.github/workflows/release.yml#L47-47
    - https://github.com/juice-shop/juice-shop/blob/master/Dockerfile#L5-5
    - https://github.com/juice-shop/juice-shop/blob/master/Dockerfile.arm#L5-5
    - https://github.com/juice-shop/juice-shop/blob/master/package.json#L55-55



## Suppressed results

- **[ERROR]** **[generic.secrets.security.detected-private-key.detected-private-key]**  `Private Key detected. This is a sensitive credential and should not be hardcoded here. Instead, store this in a separate, private file.`
    - https://github.com/juice-shop/juice-shop/blob/master/lib/insecurity.js#L19-19


