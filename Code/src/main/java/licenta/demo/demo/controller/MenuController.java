package licenta.demo.demo.controller;
import licenta.demo.demo.entity.Menu;
import licenta.demo.demo.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin()
@RestController
@RequestMapping(MenuController.BASE_URL)
public class MenuController {

    public static final String BASE_URL="/menu";

    @Autowired
    private MenuService menuService;

//    @GetMapping("/al")
    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<Menu> list(){
        return menuService.listAll();
    }

    @PostMapping("/addmenu")
    public void add(@RequestBody List<Menu> menu)
    {
        menuService.deleteAll();
        menuService.save(menu);
    }

    @PutMapping("/{menuId}")
    public ResponseEntity<?> update(@RequestBody List<Menu> menu, @PathVariable Integer menuId) {
        try {

            menuService.save(menu);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }




    @DeleteMapping("/delete")
    public void deleteAll(){
        menuService.deleteAll();
    }
}
