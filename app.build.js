// RequireJS Build File

({
    baseUrl: "public/js/",
    //specifies location of runtime config i.e. config file
    //loaded into browser at runtime
    mainConfigFile: 'public/js/main.js',
    keepBuildDir: true,
    wrapShim: false,
    optimize: "uglify2",
    uglify2: {
        output: {
            beautify: true
        },
        compress: {
            sequences: false,
            global_defs: {
                DEBUG: false
            }
        },
        warnings: true,
        mangle: false
    },
    //Inlines the text for any text! dependencies, to avoid the separate
    //async XMLHttpRequest calls to load those dependencies.
    inlineText: true,
    //Default is false because there are not many browsers that can properly
    useStrict: false,
    //Skip processing for pragmas.
    skipPragmas: true,
    //If skipModuleInsertion is false, then files that do not use define()
    //to define modules will get a define() placeholder inserted for them.
    skipModuleInsertion: false,
    stubModules: ['text'],
    optimizeAllPluginResources: false,
    //Finds require() dependencies inside a require() or define call. By default
    //this value is false, because those resources should be considered dynamic/runtime
    //calls.
    findNestedDependencies: false,
    //If set to true, any files that were combined into a build bundle will be
    //removed from the output folder.
    removeCombined: false,
    //If you only intend to optimize a module (and its dependencies), with
    //a single file as the output, you can specify the module options inline,
    //instead of using the 'modules' section above. 'exclude',
    //'excludeShallow', 'include' and 'insertRequire' are all allowed as siblings
    //to name. The name of the optimized file is specified by 'out'.
    name: "main",
    out: "build/main.min.js",
    //Another way to use wrap, but uses default wrapping of:
    //(function() { + content + }());
    wrap: true,
    //When the optimizer copies files from the source location to the
    //destination directory, it will skip directories and files that start
    //with a ".". If you want to copy .directories or certain .files, for
    //instance if you keep some packages in a .packa
    fileExclusionRegExp: /^\./,
    preserveLicenseComments: false,
    //Sets the logging level. It is a number. If you want "silent" running,
    //set logLevel to 4. From the logger.js file:
    //TRACE: 0,
    //INFO: 1,
    //WARN: 2,
    //ERROR: 3,
    //SILENT: 4
    //Default is 0.
    logLevel: 3,
    //Introduced in 2.1.3: Some situations do not throw and stop the optimizer
    //when an error occurs. However, you may want to have the optimizer stop
    //on certain kinds of errors and you can configure those situations via
    //this option
    throwWhen: {
        //If there is an error calling the minifier for some JavaScript,
        //instead of just skipping that file throw an error.
        optimize: true
    },
    //Defines the loading time for modules. Depending on the complexity of the
    //dependencies and the size of the involved libraries, increasing the wait
    //interval may be required. Default is 7 seconds. Setting the value to 0
    //disables the waiting interval.
    waitSeconds: 7,
    //Introduced in 2.1.9: normally r.js inserts a semicolon at the end of a
    //file if there is not already one present, to avoid issues with
    //concatenated files and automatic semicolon insertion  (ASI) rules for
    //JavaScript. It is a very blunt fix that is safe to do, but if you want to
    //lint the build output, depending on the linter rules, it may not like it.
    //Setting this option to true skips this insertion. However, by doing this,
    //you take responsibility for making sure your concatenated code works with
    //JavaScript's ASI rules, and that you use a minifier that understands when
    //to insert semicolons to avoid ASI pitfalls.
    skipSemiColonInsertion: true,
})
