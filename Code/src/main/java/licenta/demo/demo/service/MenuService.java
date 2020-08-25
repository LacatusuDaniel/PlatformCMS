package licenta.demo.demo.service;
import licenta.demo.demo.entity.Menu;
import licenta.demo.demo.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class MenuService {
    @Autowired
    private MenuRepository menuRepository;

    public List<Menu> listAll(){
        return menuRepository.findAll();
    }

    public void save(List<Menu> menus){
        menuRepository.deleteAll();
        menuRepository.saveAll(menus);

    }

    public Menu get(Integer menuId){
        return menuRepository.findById(menuId).get();
    }

    public void delete(Integer menuId){
        menuRepository.deleteById(menuId );
    }

    public void deleteAll(){
        menuRepository.deleteAll();
    }
}
