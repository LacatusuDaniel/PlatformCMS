package licenta.demo.demo.service;
import licenta.demo.demo.entity.Pages;
import licenta.demo.demo.repository.PagesRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PagesService {

    @Autowired
    private PagesRepository pagesRepository;

    public List<Pages> listAll(){
        return pagesRepository.findAll();
    }

    public void save(Pages pages){
        pagesRepository.save(pages);
    }

    public Pages get(Integer pageId){
        return pagesRepository.findById(pageId).get();
    }

    public void delete(Integer pageId){
        pagesRepository.deleteById(pageId );
    }

    public Pages getPageById(Integer pageId){
        return pagesRepository.findById(pageId).get();
    }

}
