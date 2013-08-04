package li.koly.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.validation.Valid;
import java.util.Comparator;

@Controller
public class HomeController {
    @Autowired
    private Comparator<String> comparator;

    @RequestMapping
    public String home(ModelMap model){
        System.out.println("This is the home controller!");
        model.addAttribute("customer", new Customer());
        return "home";
    }

    @RequestMapping(value = "customer")
    public String homeSubmit(@Valid Customer customer, BindingResult result){
        System.out.println("This is the home controller submit handler!");
        if (result.hasErrors()){
            return "home";
        }
        return "info";
    }

    @RequestMapping(value = "/compare", method = RequestMethod.GET)
    public String compare(@RequestParam("input1") String input1,
                          @RequestParam("input2") String input2, Model model) {

        int result = comparator.compare(input1, input2);
        String inEnglish = (result < 0) ? "less than" : (result > 0 ? "greater than" : "equal to");

        String output = "According to our Comparator, '" + input1 + "' is " + inEnglish + "'" + input2 + "'";

        model.addAttribute("output", output);
        return "compareResult";
    }

}
