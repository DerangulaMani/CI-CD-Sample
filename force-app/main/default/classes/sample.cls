public class sample {
     @AuraEnabled
	   public static List<Contact> Acc()
       {
       		List<Contact> con =  [SELECT Id,LastName FROM Contact limit 10];
            System.debug('con '+con);
            return con;
       }
    
      @AuraEnabled(cacheable = true)
       public static List<Account> GetAccData(){
        List<Account> acc = [Select Id,Name,Description,BillingState,BillingCountry,BillingCity,BillingStreet 
        From Account ORDER BY Name Limit 10];
        return acc;
    }
}