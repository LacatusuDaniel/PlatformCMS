package licenta.demo.demo.controller;

import licenta.demo.demo.entity.Users;
import licenta.demo.demo.service.UsersService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping(UsersController.BASE_URL)
public class UsersController {

    public static final String BASE_URL="/users";

    @Autowired
    private UsersService usersService;

    @Autowired
    PasswordEncoder encoder;

    @GetMapping("/all")
    public List<Users> list(){
        return usersService.listAll();
    }

    @GetMapping("/{userId}")
    public ResponseEntity<Users> get(@PathVariable Integer userId) {
        try {
            Users users = usersService.get(userId);
            return new ResponseEntity<Users>(users, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Users>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/adduser")
    public void add(@RequestBody Users users){
//        users.setRoles("daa");
        users.setPassword(encoder.encode(users.getPassword()));
        users.setStatus("active");
        usersService.save(users);
    }

    @PutMapping("/{userId}")
    public ResponseEntity<?> update(@RequestBody Users users, @PathVariable Integer userId) {
        try {
            Users existUser = usersService.get(userId);
            users.setPassword(encoder.encode(users.getPassword()));
            usersService.save(users);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{userId}")
    public void delete(@PathVariable Integer userId) {
        usersService.delete(userId);
    }

}
