'use strict';
var tempPath = '../../.enb/tmp/';
var publicPath = '../../public/';

module.exports = function (config) {
    config.setLanguages(['en']);

    config.mode('development', function () {
        config.nodes('bundles/*', function (nodeConfig) {
            nodeConfig.addTechs([
                [require('enb/techs/file-copy'), {sourceTarget: tempPath + '?.css', destTarget: publicPath + '?.css'}],
                [require('enb/techs/file-copy'), {sourceTarget: tempPath + '?.js', destTarget: publicPath + '?.js'}],
            ]);
        });
    });

    config.mode('production', function () {
        config.nodes('bundles/*', function (nodeConfig) {
            nodeConfig.addTechs([
                [require('enb-borschik/techs/borschik'), {
                    sourceTarget: tempPath + '?.css',
                    destTarget: publicPath + '?.css',
                    minify: true,
                    freeze: true
                }],
                [require('enb-borschik/techs/borschik'), {
                    sourceTarget: tempPath + '?.js',
                    destTarget: publicPath + '?.js',
                    minify: true,
                    freeze: true
                }]
            ]);
        });
    });

    config.nodes('bundles/*', function (nodeConfig) {
        nodeConfig.addTechs([
            [require('enb-bem-techs/techs/levels'), {
                target: tempPath + '?.levels',
                levels: getCommonLevels(config)
            }],

            [require('enb/techs/file-provider'), {target: '?.bemdecl.js'}],
            [require('enb/techs/file-provider'), {target: '?.js'}],

            [require('enb-bem-techs/techs/files'), {
                levelsTarget: tempPath + '?.levels',
                filesTarget: tempPath + '?.files',
                dirsTarget: tempPath + '?.dirs',
                depsFile: tempPath + '?.deps.js'
            }],
            [require('enb-bem-techs/techs/deps'), {
                levelsTarget: tempPath + '?.levels',
                target: tempPath + '?.deps.js'
            }],
            [require('enb-stylus/techs/css-stylus-with-nib'), {
                filesTarget: tempPath + '?.files',
                target: tempPath + '?.css'
            }],
            [require('enb-browserify/techs/browserify'), {
                source: '?.js',
                target: tempPath + '?.js'
            }],
        ]);

        nodeConfig.mode('development', function (nodeConfig) {
            nodeConfig.addTargets([
                publicPath + '?.js',
                publicPath + '?.css'
            ]);
        });

        nodeConfig.mode('production', function (nodeConfig) {
            nodeConfig.addTargets([
                publicPath + '?.js',
                publicPath + '?.css'
            ]);
        });
    });
};


function getCommonLevels(config) {
    return [
        {path: 'blocks', check: true}
    ].map(function (l) { return config.resolvePath(l); });
}
