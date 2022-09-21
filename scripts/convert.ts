import { resolve } from 'path';
import {convertor} from 'md-img-convertor'
import fs from 'fs'
import glob from 'glob'
const dir = resolve(__dirname,'../notes')
glob('**/*.md',{
  ignore: ['**/node_modules/**','**/README.md']
},(err,mdFiles)=>{
  if(err){
    console.warn(err);
  }else{
    for (const file of mdFiles) {
      const source = fs.readFileSync(resolve(__dirname,`../${file}`),{encoding:'utf-8'})
      const res = convertor(source,{imgDist:resolve(__dirname,'../assets'),folderLink:'https://raw.githubusercontent.com/kitiho/leetcode/main/assets'})
      fs.writeFileSync(resolve(__dirname,`../${file}`),res,{encoding:'utf-8'})
    }
  }
})

