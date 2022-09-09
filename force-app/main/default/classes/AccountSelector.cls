public with sharing class AccountSelector {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(String name) {
        return [SELECT Id, Name FROM Account LIMIT 3];
    }
}
