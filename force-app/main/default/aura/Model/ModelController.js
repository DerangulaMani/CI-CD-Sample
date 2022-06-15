({
    CloseModalpopUphelper : function(component,event) {
        var action = component.get("c.CloseModalpopUp");
    action.setCallback(this, function(response){
        console.log(' response : '+response);
        var state = response.getState();
        if (state === "SUCCESS") {
            var listviews = response.getReturnValue();
            console.log(' listviews : '+listviews);
            var navEvent = $A.get("e.force:navigateToList");
            navEvent.setParams({
                "listViewId": listviews,
                "listViewName": null,
                "scope": "Contact"
            });
            navEvent.fire();
        }
    });
    $A.enqueueAction(action);
    }
})