package licenta.demo.demo.service;

import licenta.demo.demo.entity.Users;
import licenta.demo.demo.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Service
public class UsersService {

    @Autowired
    private  UsersRepository usersRepository;

    public List<Users> listAll(){
        return usersRepository.findAll();
    }

    public void save(Users users){
        usersRepository.save(users);
    }

    public  Users get(Integer userId){
        return usersRepository.findById(userId).get();
    }

    public void delete(Integer userId){
        usersRepository.deleteById(userId);
    }
}
