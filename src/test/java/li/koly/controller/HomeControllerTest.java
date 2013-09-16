package li.koly.controller;

import li.koly.model.Customer;
import li.koly.model.CustomerDTO;
import org.apache.commons.beanutils.BeanUtils;
import org.junit.Test;

import java.lang.reflect.InvocationTargetException;

import static org.hamcrest.core.Is.is;
import static org.junit.Assert.assertThat;

public class HomeControllerTest {

    @Test
    public void should_test_hashcode() throws Exception {
        HomeController homeController = new HomeController();
        System.out.println(homeController.hashCode());
        Customer customer = new Customer();
        customer.setName("koly");
        customer.setAge(12);
        CustomerDTO customerDTO = new CustomerDTO();

        BeanUtils.copyProperties(customerDTO, customer);

        assertThat(customerDTO.getName(), is("koly"));
        assertThat(customerDTO.getAge(), is(12));
    }
}
