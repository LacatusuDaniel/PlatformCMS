package licenta.demo.demo.service;

import licenta.demo.demo.entity.Menus;
import licenta.demo.demo.repository.MenusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenusService {

    @Autowired
    private MenusRepository menusRepository;

    public List<Menus> listAll(){
        return menusRepository.findAll();
    }

    public void save(List<Menus> menus){
        menusRepository.deleteAll();
        menusRepository.saveAll(menus);

    }

    public Menus get(Integer menuId){
        return menusRepository.findById(menuId).get();
    }

    public void delete(Integer menuId){
        menusRepository.deleteById(menuId );
    }

    public void deleteAll(){
        menusRepository.deleteAll();
    }
}
