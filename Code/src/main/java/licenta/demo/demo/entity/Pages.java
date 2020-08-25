package licenta.demo.demo.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;


@Entity
 @Table(name="pages")
public class Pages implements Serializable {
    @Id
    @GeneratedValue(strategy =GenerationType.IDENTITY)
    @Column(name="pageid")
    private Integer pageId;
    @Column(name="pagetitle")
    private String pageTitle;
    @Lob
    @Column(name="pagecontent")
    private String pageContent;
    @Column(name="createdby")
    private String createdBy;
    @JsonFormat(pattern="HH:mm:ss dd-MM--yyyy")
    @Column(name="createddateandtime")
    private LocalDateTime createdDateAndTime;
    @Column(name="userid")
    private Integer userId;
    @Column(name="pageurl")
    private String pageUrl;
    @Column(name="templates_templateId")
    private Integer templates_TemplateId;


//    @JsonBackReference
    @ManyToOne(cascade = CascadeType.ALL ,fetch = FetchType.EAGER)
    @JoinColumn(name = "templates_templateId", updatable = false, insertable = false)
    private Templates templates;

//    @JsonBackReference
    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.REFRESH, CascadeType.MERGE}, fetch = FetchType.EAGER)
    @JoinColumn(name = "userid", updatable = false, insertable = false)
    private Users users;

    @OneToMany(mappedBy = "pages")
    private List<Menus> menus;


    public Pages() {

    }

    public Pages(String pageTitle, String pageContent) {
        this.pageTitle = pageTitle;
        this.pageContent = pageContent;
    }

    public Pages(String pageTitle, String pageContent, String createdBy, LocalDateTime createdDateAndTime, Integer userId, String pageUrl, Integer templates_TemplateId, Templates templates, Users users) {
        this.pageTitle = pageTitle;
        this.pageContent = pageContent;
        this.createdBy = createdBy;
        this.templates_TemplateId=templates_TemplateId;
        this.createdDateAndTime = createdDateAndTime;
        this.userId = userId;
        this.pageUrl = pageUrl;

        this.templates = templates;
        this.users=users;
    }





    public Integer getPageId() {
        return pageId;
    }

    public void setPageId(Integer pageId) {
        this.pageId = pageId;
    }

    public String getPageTitle() {
        return pageTitle;
    }

    public void setPageTitle(String pageTitle) {
        this.pageTitle = pageTitle;
    }

    public String getPageContent() {
        return pageContent;
    }

    public void setPageContent(String pageContent) {
        this.pageContent = pageContent;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public LocalDateTime getCreatedDateAndTime() {
        return createdDateAndTime;
    }

    public void setCreatedDateAndTime(LocalDateTime createdDateAndTime) {
        this.createdDateAndTime = createdDateAndTime;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }


    public String getPageUrl() {
        return pageUrl;
    }

    public void setPageUrl(String pageUrl) {
        this.pageUrl = pageUrl;
    }

    public Integer getTemplateId() {
        return templates_TemplateId;
    }

    public void setTemplateId(Integer templateId) {
        this.templates_TemplateId = templateId;
    }


    public Templates getTemplates() {
        return templates;
    }

    public void setTemplates(Templates templates) {
        this.templates = templates;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }
}
