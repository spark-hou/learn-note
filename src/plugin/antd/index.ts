/**
 * @author  sparkHou
 * @date 2021-04-16 16:09
 * @Description:
 */
import {Button, Switch, Anchor,PageHeader,Typography } from 'ant-design-vue/es';
const{title,paragraph,text,link  }=Typography
export default function (app: any) {
  app.use(Button)
  app.use(Switch)
  app.use(Anchor)
  app.use(PageHeader)
  app.use(Typography)
  app.use(title)
  app.use(paragraph)
  app.use(text)
  app.use(link)
}
