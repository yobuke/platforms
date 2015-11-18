cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cn.jpush.phonegap.JPushPlugin/www/JPushPlugin.js",
        "id": "cn.jpush.phonegap.JPushPlugin.JPushPlugin",
        "clobbers": [
            "window.plugins.jPushPlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cn.jpush.phonegap.JPushPlugin": "2.0.2"
}
// BOTTOM OF METADATA
});