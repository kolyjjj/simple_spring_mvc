package li.koly.controller;

import li.koly.model.Customer;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class TooltipController {

    @RequestMapping(value="tooltip", method=RequestMethod.GET)
    public String tooltip(ModelMap model){
        System.out.println("this is tooltip controller");
        model.addAttribute("customer", new Customer());
        return "tooltip";
    }
}
