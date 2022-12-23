package g25.com.petshop.controller;

import g25.com.petshop.models.Products;
import g25.com.petshop.models.Users;
import g25.com.petshop.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping("/login")
    @ResponseStatus(HttpStatus.CREATED)
    public void save(@RequestBody Users user) {
        userService.save(user);
    }


    @PostMapping("/register")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void update(@RequestBody Long userId) {
        userService.findLoginUser(userId);
    }


}
