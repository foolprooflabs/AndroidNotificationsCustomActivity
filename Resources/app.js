

    var notifications = ["Apple","Orasnge","Banana"];

    for(var i = 0; i < notifications.length; i++){
        var intent = Ti.Android.createIntent({
            action: Ti.Android.ACTION_VIEW,
            className:"com.company.notificationtest.NotificationClickActivity",
            flags:Ti.Android.FLAG_ACTIVITY_RESET_TASK_IF_NEEDED  | Ti.Android.FLAG_ACTIVITY_SINGLE_TOP
        });
        intent.addCategory(Ti.Android.CATEGORY_DEFAULT);
        intent.putExtra("name",notifications[i]);

        Titanium.Android.NotificationManager.notify(i, Titanium.Android.createNotification({
            contentTitle: notifications[i],
            contentText : notifications[i],
            contentIntent: Ti.Android.createPendingIntent({
                intent:intent,
                type : Ti.Android.PENDING_INTENT_FOR_ACTIVITY
            }),
            flags : Titanium.Android.FLAG_AUTO_CANCEL | Titanium.Android.FLAG_SHOW_LIGHTS
        }));
    }

    Ti.App.Properties.setBool("displayedNotifications",true);

var win = Ti.UI.createWindow({

});
win.add(Ti.UI.createLabel({text: "HEjjoooooooooooooooooooLLO",backgroundColor:"blue"}));
win.open();