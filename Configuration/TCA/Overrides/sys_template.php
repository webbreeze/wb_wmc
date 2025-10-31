<?php
defined('TYPO3') or die();

call_user_func(
    function () {
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
            'wb_wmc',
            'Configuration/TypoScript',
            'Die Werstener Music Company Extension - WebBreeze'
        );
    }
);