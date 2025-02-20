package lk.ijse.productservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/product")
public class ProductController {

@GetMapping("/all")
public String getProduct() {
       return " product :  prod1, prod2 ,prod3 ";
}

}
