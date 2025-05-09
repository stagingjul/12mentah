import stylistic           from '@stylistic/eslint-plugin'
import alignassignments    from 'eslint-plugin-align-assignments'
import alignimport         from 'eslint-plugin-align-import'
import importorganizer     from 'eslint-plugin-import'
import react               from 'eslint-plugin-react'
import reacthooks          from 'eslint-plugin-react-hooks'
import globals             from 'globals'
import { config, configs } from 'typescript-eslint'

export default config({ ignores : [ 'bootstrap', 'node_modules', 'public', 'vendor' ] }, {
    extends         : [ ...configs.recommended ],
    files           : [ '**/*.{ts,tsx}' ],
    languageOptions : {
        globals       : { ...globals.browser },
        parserOptions : { ecmaFeatures : { jsx : true } },
    },
    plugins : {
        '@stylistic'        : stylistic,
        'align-import'      : alignimport,
        'align-assignments' : alignassignments,
        'import'            : importorganizer,
        'react-hooks'       : reacthooks,
        'react'             : react,
    },
    rules : {
        '@stylistic/array-bracket-spacing'           : [ 'error', 'always' ],
        '@stylistic/comma-dangle'                    : [ 'error', 'always-multiline' ],
        '@stylistic/indent'                          : [ 'error', 4 ],
        '@stylistic/jsx-closing-tag-location'        : [ 'error' ],
        '@stylistic/jsx-curly-brace-presence'        : [ 'error', { 'props' : 'always', 'propElementValues' : 'always', 'children' : 'never' } ],
        '@stylistic/jsx-curly-spacing'               : [ 'error', { 'when' : 'never', 'children' : true } ],
        '@stylistic/jsx-pascal-case'                 : [ 'error', { 'allowAllCaps' : true } ],
        '@stylistic/jsx-props-no-multi-spaces'       : [ 'error' ],
        '@stylistic/jsx-sort-props'                  : [ 'error', { 'shorthandLast' : true, 'callbacksLast' : true } ],
        '@stylistic/jsx-tag-spacing'                 : [ 'error', { 'beforeSelfClosing' : 'always', 'beforeClosing' : 'never' } ],
        '@stylistic/key-spacing'                     : [ 'error', { 'beforeColon' : true, 'afterColon' : true, 'align' : 'colon' } ],
        '@stylistic/no-mixed-spaces-and-tabs'        : [ 'error' ],
        '@stylistic/no-multiple-empty-lines'         : [ 'error', { 'max' : 1, 'maxBOF' : 0, 'maxEOF' : 0 } ],
        '@stylistic/no-whitespace-before-property'   : [ 'error' ],
        '@stylistic/padding-line-between-statements' : [ 'error', { 'blankLine' : 'always', 'prev' : '*', 'next' : 'return' } ],
        '@stylistic/quotes'                          : [ 'error', 'single' ],
        '@stylistic/semi'                            : [ 'error', 'never' ],
        '@typescript-eslint/no-unused-expressions'   : [ 'off' ],
        'align-import/align-import'                  : [ 'error' ],
        'eol-last'                                   : [ 'error', 'always' ],
        'import/order'                               : [ 'error', { 'alphabetize' : { 'order' : 'asc', 'caseInsensitive' : true }, 'groups' : [ 'builtin', 'external', 'internal' ], 'pathGroups' : [ { 'pattern' : 'react', 'group' : 'external', 'position' : 'before' }, { 'pattern' : 'react-dom/*', 'group' : 'external', 'position' : 'before' }, { 'pattern' : '$/**', 'group' : 'internal', 'position' : 'before' }, { 'pattern' : '@/**', 'group' : 'internal', 'position' : 'after' } ], 'pathGroupsExcludedImportTypes' : [ 'react', 'react-dom/*' ], 'newlines-between' : 'always' } ],
        'no-alert'                                   : [ 'error' ],
        'no-console'                                 : [ 'error', { 'allow' : [ 'error' ] } ],
        'no-useless-concat'                          : [ 'off' ],
        'prefer-template'                            : [ 'off' ],
        'react/react-in-jsx-scope'                   : [ 'off' ],
        'react/prop-types'                           : [ 'off' ],
        'react/no-unescaped-entities'                : [ 'off' ],
        'react-hooks/rules-of-hooks'                 : [ 'error' ],
        'react-hooks/exhaustive-deps'                : [ 'warn' ],
    },
    settings : { react : { version : 'detect' } },
})
