package com.mfy98.qa;

import com.mfy98.qa.tests.APITesting;
import com.mfy98.qa.tests.LoadTesting;
import com.mfy98.qa.tests.ManuelTesting;
import com.mfy98.qa.tests.TestAutomation;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class QaApplication {

    public static void main(String[] args) {
        SpringApplication.run(QaApplication.class, args);

        TestAutomation testAutomation = new TestAutomation();


        testAutomation.run();

    }

}
