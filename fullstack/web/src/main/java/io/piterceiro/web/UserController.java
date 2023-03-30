package io.piterceiro.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.val;

@RestController
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/")
    public List<User> GetUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/{id}")
    public User GetUser(@PathVariable String id) {
        return userRepository.findById(id).orElse(null);
    }

    @PostMapping("/")
    public User postMethodName(@RequestBody User user) {
        return userRepository.save(user);
    }

    @PutMapping("/")
    public User PutMapping(@RequestBody User newUser) {
        User oldUser = userRepository.findById(newUser.getId()).orElse(null);
        oldUser.setNome(newUser.getNome());
        oldUser.setEmail(newUser.getEmail());
        oldUser.setSenha(newUser.getSenha());
        return oldUser;
    }

    @DeleteMapping
    public String DeleteUser(@PathVariable String id) {
        userRepository.deleteById(id);
        return id;
    }

    
}
