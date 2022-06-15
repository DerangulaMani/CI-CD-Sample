public with sharing class ContactsData {
    @AuraEnabled(cacheable = true)
    public static List<Contact> GetContacts(){
        return [Select Id,Name,Email,Title from Contact Limit 20];
    }
}