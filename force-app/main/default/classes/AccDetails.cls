public with sharing class AccDetails{
    @AuraEnabled(cacheable = true)
    public static List<Account> GetAccData(){
        List<Account> acc = [Select Id,Name,Description,BillingState,BillingCountry,BillingCity,BillingStreet 
        From Account ORDER BY Name Limit 10];
        return acc;
    }
}