package li.koly.model;

import org.hibernate.validator.constraints.Range;

import javax.validation.constraints.NotNull;

public class Customer {

    @NotNull
    String name;

    @Range(min = 1, max = 150)
    int age;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
