public class GetallAccounts{
    @AuraEnabled
    public static List<Account> getallAccountsMethod()
    {
        List<Account> acc = [Select Id,Name,Description,BillingState,BillingCountry,BillingCity,BillingStreet 
        					From Account];
        return acc;
    }
}