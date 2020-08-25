package licenta.demo.demo.service;

import licenta.demo.demo.dto.MenuPagDto;
import licenta.demo.demo.entity.Pages;
import licenta.demo.demo.repository.CustomFieldsRepository;
import licenta.demo.demo.repository.MenusRepository;
import licenta.demo.demo.repository.PagesRepository;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class JoinQueryService {

	@Resource
	private PagesRepository pagesRepository;


	@Resource
	private MenusRepository menusRepository;

	@Resource
	private CustomFieldsRepository customFieldsRepository;


	public List<MenuPagDto> getMenuPagInnerJoin() {
		List<MenuPagDto> list = menusRepository.fetchMenuPagDataInnerJoin();
		list.forEach(l -> System.out.println(l));
		return list;
	}



	public Pages getPages(Integer pageId){
		return pagesRepository.findById(pageId).get();
	}


}
