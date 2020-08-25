package licenta.demo.demo.controller;

import licenta.demo.demo.entity.Menus;
import licenta.demo.demo.service.MenusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin()
@RestController
@RequestMapping(MenusController.BASE_URL)
public class MenusController {

    public static final String BASE_URL="/menus";

    @Autowired
    private MenusService menusService;

    @GetMapping("/all")
    public List<Menus> list(){
        return menusService.listAll();
    }

    @PostMapping("/addmenus")
    public void add(@RequestBody List<Menus> menus)
    {
        menusService.deleteAll();
        menusService.save(menus);
    }

    @PutMapping("/{menuId}")
    public ResponseEntity<?> update(@RequestBody List<Menus> menus, @PathVariable Integer menuId) {
        try {

            menusService.save(menus);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }




    @DeleteMapping("/delete")
    public void deleteAll(){
        menusService.deleteAll();
    }
}
