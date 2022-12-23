package g25.com.petshop.services;

import g25.com.petshop.models.Users;
import g25.com.petshop.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    public void save(Users user) {
        userRepository.save(user);
    }

    public Optional<Users> findLoginUser (Long userId) {
        return userRepository.findById(userId);
    }
}
