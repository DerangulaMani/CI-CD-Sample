public class getListView {
    @AuraEnabled
    public static List<ListView> CloseModalpopUp() {
        List<ListView> listviews = [SELECT Id, Name FROM ListView WHERE SobjectType = 'Contact' and Name='All Contacts'];
        Map<String,ListView> MapObject = new Map<String,ListView>();
        if(listviews.size()>0){
            String BaseUrl =URL.getSalesforceBaseUrl().toExternalForm();
            if(BaseUrl!=null){
                MapObject.put(BaseUrl,listviews[0]); 
            }
        }
        return listviews;
    }
}