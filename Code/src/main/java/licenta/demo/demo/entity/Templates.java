package licenta.demo.demo.entity;



import javax.persistence.*;
import java.io.Serializable;
import java.util.List;
import java.util.Set;


@Entity
@Table(name="templates")
public class Templates implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="templateid", length=50, nullable=false, unique=true)
    private Integer templateId;
    @Column(name="templatename", length=50, nullable=false, unique=false)
    private String templateName;
    @Column(name="userid", length=50, nullable=false, unique=false)
    private Integer userId;
    @Lob
    @Column(name="templatecontent", columnDefinition="text", length=1000000)
    private String templateContent;


    @OneToMany(mappedBy = "templates")
    private List<Pages> pages;


    @OneToMany(mappedBy = "templates")
    private Set<CustomFieldsGroup> customFieldsGroup;




    public Templates() {
    }

//    public Templates(Integer templateId, String templateName, Integer userId, String templateContent) {
//        this.templateId=templateId;
//        this.templateName = templateName;
//        this.userId = userId;
//        this.templateContent = templateContent;
//    }


    public Templates(String templateName, Integer userId, String templateContent, List<Pages> pages, Set<CustomFieldsGroup> customFieldsGroup) {
        this.templateName = templateName;
        this.userId = userId;
        this.templateContent = templateContent;
        this.pages = pages;
        this.customFieldsGroup = customFieldsGroup;
    }




    public Integer getTemplateId() {
        return templateId;
    }

    public void setTemplateId(Integer templateId) {
        this.templateId = templateId;
    }

    public String getTemplateName() {
        return templateName;
    }

    public void setTemplateName(String templateName) {
        this.templateName = templateName;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getTemplateContent() {
        return templateContent;
    }

    public void setTemplateContent(String templateContent) {
        this.templateContent = templateContent;
    }


    public List<Pages> getPages() {
        return null;
    }

    public void setPages(List<Pages> pages) {
        this.pages = pages;
    }



    public Set<CustomFieldsGroup> getCustomFieldsGroup() {
        return customFieldsGroup;
    }

    public void setCustomFieldsGroup(Set<CustomFieldsGroup> customFieldsGroup) {
        this.customFieldsGroup = customFieldsGroup;
    }
}
