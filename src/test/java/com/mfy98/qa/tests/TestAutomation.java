package com.mfy98.qa.tests;

import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.springframework.boot.test.context.TestComponent;

import static org.junit.Assert.assertEquals;

@TestComponent
public class TestAutomation {

    /* TEST SENARYOLARI:
    https://parabank.parasoft.com/parabank/register.htm'de form doldurulması sırasında;
    1. Türkçe karakter kontrolü
    2. Özel karakter kontrolü ("${½$[½")
     */
    @Test
    public void testUsernameTurkishChars(){

        //Arrange
        WebDriver driver = new ChromeDriver();
        WebElement userName = driver.findElement(By.id("customer.username"));
        WebElement message = driver.findElement(By.id("customer.username.errors"));
        WebElement registerButton = driver.findElement(By.xpath("//a[contains(text(),'Register')]"));

        //Act
        driver.get("https://parabank.parasoft.com/parabank/register.htm");
        userName.sendKeys("ÖĞıŞÜİÜÜıĞĞ");
        registerButton.click();

        //Assert
        assertEquals("Turkish characters must not included.",message.getText());


        //Finally
        driver.quit();
    }
    @Test
    public void testUsernameSpecialChars(){

        //Arrange
        WebDriver driver = new ChromeDriver();
        WebElement city = driver.findElement(By.id("customer.address.city"));
        WebElement errorMessage = driver.findElement(By.id("customer.city.errors"));


        //Act
        driver.get("https://parabank.parasoft.com/parabank/register.htm");
        city.sendKeys("½[#$½]{>");

        //Assert
        assertEquals("Invalid characters for city", errorMessage.getText());

        //Finally
        driver.quit();
    }
    public void run(){
        testUsernameTurkishChars();
        testUsernameSpecialChars();
    }

}
