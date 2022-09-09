public with sharing class ParoductManager {
    @AuraEnabled
    public static void createProduct(String name){
        Product2 prd = new Product2(Name = name);
        insert prd;
    }
}