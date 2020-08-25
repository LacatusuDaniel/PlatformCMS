import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-render-html',
  templateUrl: './render-html.component.html',
  styleUrls: ['./render-html.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RenderHtmlComponent implements OnInit {

  private _page;
  private mappedCustomField= { };


  @Input()
  set page(val: any ) {
    this._page = val;

    if (!this.page || !this.page.pages || !this.page.pages.templates || !this.page.pages.templates.customFieldsGroup[0] || !this.page.pages.templates.customFieldsGroup[0].customFields) {
      return ;
    }
    for (const eachCustomField of this.page.pages.templates.customFieldsGroup[0].customFields) {
      console.log(eachCustomField);
      this.mappedCustomField[eachCustomField.customId] = eachCustomField;
    }
    console.log(this.mappedCustomField);
    }

  get page(): any{
      return this._page;
  }
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

  }

  getDynamicTemplate() {
    if (!this.page || !this.page.pages || !this.page.pages.templates || !this.page.pages.templates.templateContent) {
      return ;
    }

    let dynamicTemplateParsed = this.page.pages.templates.templateContent;
    dynamicTemplateParsed = dynamicTemplateParsed.replace('[PAGE_TITLE]', this.page.pages.pageTitle);
    dynamicTemplateParsed = dynamicTemplateParsed.replace('[PAGE_CONTENT]', this.page.pages.pageContent);

    const result = dynamicTemplateParsed.match(/(?<=\[).+?(?=\])/g);

    if (!result) {
      return dynamicTemplateParsed;
    }
    for (const eachCf of result ){
      // TODO
      const keys = eachCf.split('.');
      dynamicTemplateParsed = dynamicTemplateParsed.replace(`[${eachCf}]`, this.mappedCustomField[keys[0]][keys[1]]);
    }
    return dynamicTemplateParsed;

  }
}
