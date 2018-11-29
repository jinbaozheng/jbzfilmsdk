/**
 * Created by cuppi on 2017/8/31.
 */
const gulp = require("gulp");
const watch = require("gulp-watch")
const ts = require("gulp-typescript");
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const tsProject = ts.createProject("tsconfig.json");
const runSequence = require('run-sequence');
const del = require('del');

// typescript 管道处理
gulp.task("do-typescript-process", function() {
    return gulp
        .src("./src/**/*.+(ts|js)")
        .pipe(tsProject())
        .js
        .pipe(gulp.dest("ts-middleware"));
});

// bable es6 管道处理
gulp.task("do-babel-process", function() {
    return gulp
        .src("./ts-middleware/**/*.js")
        // .pipe(sourcemaps.init())
        .pipe(babel({
            plugins: ["transform-runtime"],
            presets: ["es2015", "stage-2"],
            comments: true
        }))
        // .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("dist"))
});

// 清除typescript中间文件
gulp.task("clean-middleware", function () {
    return del('./ts-middleware');
});
// 执行打包操作
gulp.task("transform-ts-to-js", function () {
    runSequence('do-typescript-process', 'do-babel-process', 'clean-middleware');
});

// 构建实时更新
gulp.task("transform-ts-to-js::dev", function () {
    // pass
});

// 默认任务
gulp.task("default", function() {
});
