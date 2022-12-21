/*
* La librería Lombok nos ayuda con la inicialización
* de los atributos de las clases y demás métodos que
* se puedan presentar
* */

package g25.com.petshop.services;

import g25.com.petshop.models.Products;
import g25.com.petshop.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;

    public void save(Products products) {
        productRepository.save(products);
    }

    public List<Products> findAll() {
        return productRepository.findAll();
    }

    public Optional<Products> findById(Long id) {
        return productRepository.findById(id);
    }

    public void deleteById(Long id) {
        productRepository.deleteById(id);
    }
}
