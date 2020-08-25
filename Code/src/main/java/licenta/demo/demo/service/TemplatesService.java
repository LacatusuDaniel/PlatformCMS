package licenta.demo.demo.service;

import licenta.demo.demo.entity.Templates;
import licenta.demo.demo.repository.TemplatesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TemplatesService {

    @Autowired
    private TemplatesRepository templatesRepository;

    public List<Templates> listAll(){
        return templatesRepository.findAll();
    }

    public void save(Templates templates){
        templatesRepository.save(templates);
    }

    public Templates get(Integer templateId){
        return templatesRepository.findById(templateId).get();
    }

    public void delete(Integer templateId){
        templatesRepository.deleteById(templateId );
    }


}
