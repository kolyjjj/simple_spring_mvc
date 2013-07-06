package li.koly.controller;

import org.junit.Test;

public class HomeControllerTest {

    @Test
    public void should_test_hashcode(){
        HomeController homeController = new HomeController();
        System.out.println(homeController.hashCode());
    }
}
