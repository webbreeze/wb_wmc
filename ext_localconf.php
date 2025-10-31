<?php
defined('TYPO3') or die();

call_user_func(
    function () {
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
            '@import \'EXT:wb_wmc/Configuration/TsConfig/Page/RTE.tsconfig\''
        );
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
            '@import \'EXT:wb_wmc/Configuration/TsConfig/Page/TCEFORM.tsconfig\''
        );

        /** @var \TYPO3\CMS\Core\Imaging\IconRegistry $iconRegistry */
        $iconRegistry = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\TYPO3\CMS\Core\Imaging\IconRegistry::class);

        $GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['custom'] = 'EXT:wb_wmc/Configuration/RTE/Custom.yaml';
    }
);

