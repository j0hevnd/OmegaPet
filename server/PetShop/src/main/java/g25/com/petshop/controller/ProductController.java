package g25.com.petshop.controller;

import g25.com.petshop.models.Products;
import g25.com.petshop.services.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;

    @GetMapping("/products")
    @ResponseStatus(HttpStatus.OK)
    public List<Products> findAll() {
        return productService.findAll();
    }

    @GetMapping("/products/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Products findById(@PathVariable Long id) {
        return productService.findById(id).get();
    }

    @PostMapping("/products")
    @ResponseStatus(HttpStatus.CREATED)
    public void save(@RequestBody Products products) {
        productService.save(products);
    }

    @DeleteMapping("/products/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteById(@PathVariable Long id) {
        productService.deleteById(id);
    }

    @PutMapping("/products/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void update(@RequestBody Products product) {
        productService.save(product);
    }
}
