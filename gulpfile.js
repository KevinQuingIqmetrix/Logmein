var gulp = require('gulp')
var ts = require('gulp-typescript')
var tslint = require('gulp-tslint')
var merge = require('merge2')
var del = require('del')

const tsProject = ts.createProject('tsconfig.json',ts.reporter.fullReporter());

gulp.task('default', ['tslint','clean','build'])

gulp.task("tslint", _ => {
    return gulp.src("src/**/*.ts")
        .pipe(tslint({
            formatter:"verbose"
        }))
        .pipe(tslint.report())
        ;
})

gulp.task("lintw", ["tslint"],  _ => {
    gulp.watch("src/**/*.ts",["tslint"])
})

gulp.task("build", _ => {
    // gulp.src("*.ts")
    let tsResult =  tsProject.src()
        .pipe(tsProject());
        
    return merge([
        tsResult.js.pipe(gulp.dest("dist")),
        tsResult.dts.pipe(gulp.dest("dist/typings"))
    ])
});

gulp.task('clean', _ => {
    return del.sync(['dist','dist/**/*'])
})
