<template>
    <section class="page-mg">
        <div class="mg mg-large" v-show="type === 'large'">
            <div class="img-group">
                <div class="img-item"
                     data-type="mg"
                     v-show="showImg('large',index) || showAll"
                     v-for="(value, index) in imgArr"
                     @click="goToDetail(value.gid)">
                    <img :src="chooseImg(index)">
                    <div class="mask" v-if="type !== 'small'">
                        <div class="title" v-text="value.title"></div>
                        <div class="line"></div>
                        <div class="sub-title"></div>
                    </div>
                </div>
            </div>
            <div class="view-more" @click="viewMore('large')" v-if="!showAll">
                <i class="arrow"></i>
                查看全部作品
            </div>
        </div>
        <div class="mg mg-middle" v-show="type === 'middle'">
            <div class="img-group">
                <div class="img-item"
                     data-type="mg"
                     v-show="showImg('middle', index) || showAll"
                     v-for="(value, index) in imgArr"
                     @click="goToDetail(value.gid)">
                    <img :src="chooseImg(index)">
                    <div class="mask" v-if="type !== 'small'">
                        <div class="title" v-text="value.title"></div>
                        <div class="line"></div>
                        <div class="sub-title"></div>
                    </div>
                </div>
            </div>
            <div class="view-more" @click="viewMore('middle')" v-if="!showAll">
                <i class="arrow"></i>
                查看全部作品
            </div>
        </div>
        <div class="mg mg-small" v-show="type === 'small'">
            <div class="img-group">
                <div class="img-item"
                     data-type="all"
                     v-show="showImg('small', index) || showAll"
                     v-for="(value, index) in imgArr"
                     @click="goToDetail(value.gid)">
                    <img :src="chooseImg(index)">
                </div>
            </div>
            <div class="view-more" @click="viewMore('small')" v-if="!showAll">
                <i class="arrow"></i>
                查看全部作品
            </div>
        </div>
    </section>
</template>

<script>

    export default {
        name: 'mg',
        props: {
            imgArr: {
                type: Array,
                required: true,
                default: {}
            },
            url: {
                type: Array,
                required: true,
                default: {}
            },
            type: {
                type: String,
                required: true,
                default: ''
            }
        },
        data () {
            return {
                total: {
                    length: Object.keys(this.imgArr).length
                },
                maxItem: {
                    'large': 9,
                    'middle': 9,
                    'small': 9
                },
                showAll: false
            }
        },
        components: {},
        methods: {
            chooseImg(index) {
                    return this.url[index];
            },
            viewMore(size) {
                this.$emit('viewMore', true);
                this.maxItem[size] = this.total.length;
                this.showAll = true;
            },
            showImg(size, index) {
                return index < this.maxItem[size];
            },
            goToDetail(id) {
                $(window).scrollTop(0);
                this.$emit('showContent', decodeURIComponent(id));
            },
            px2rem(num) {
                return num / 192 + 'rem';
            }
        },
        mounted() {
            $('.mg .img-item').each(function (index, item) {
                let $mask = $(this).find('.mask');
                let $title = $(this).find('.title');
                let $line = $(this).find('.line');
                let $subTitle = $(this).find('.sub-title');
                $(item).hover(function () {
                            let $width = $(item).width();
                            let $height = $(item).height();
                            $mask.fadeIn(450);
                            $title.css('top', $height / 2 - $title.height() - 10);
                            $line.css('left', $width / 2 - 10);
                            $subTitle.css('bottom', $height / 2 - $title.height() - 25);
                            $line.width($title.width());
                            $title.animate({top: '+=10px'}, 450, 'easeInOutCubic');
                            $line.animate({left: '+=10px'}, 450, 'easeInOutCubic');
                            $subTitle.animate({bottom: '+=15px'}, 450, 'easeInOutCubic');
                        },
                        function () {
                            let $width = $(item).width();
                            let $height = $(item).height();
                            $mask.fadeOut(450);
                            $title.animate({top: '+=7px'}, 450, 'easeInOutCubic', function () {
                                $title.css('top', $height / 2 - $title.height() - 10);
                            });
                            $line.animate({left: '+=10px'}, 450, 'easeInOutCubic', function () {
                                $line.css('left', $width / 2 - 10);
                            });
                            $subTitle.animate({bottom: '+=7px'}, 450, 'easeInOutCubic', function () {
                                $subTitle.css('bottom', $height / 2 - $title.height() - 25);
                            });
                        })
            });
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
    .page-mg {
        font-family: SourceHanSansCN-Regular;
        .mg-large {
            .img-group {
                margin: 0 auto;
                overflow: hidden;
                width: 1890px;
                background-color: black;
                &:hover {
                    cursor: pointer;
                }
            }
            .img-item {
                position: relative;
                display: block;
                margin: 15px;
                img {
                    width: 100%;
                    height: 100%;
                }
                .big-row() {
                    width: 1230px;
                    height: 690px;
                }

                .small-row() {
                    height: 330px;
                    width: 600px;
                }

                &:nth-child(9n+1) {
                    float: left;
                    .big-row;
                }

                &:nth-child(9n+2) {
                    float: right;
                    .small-row;
                }

                &:nth-child(9n+3) {
                    float: right;
                    .small-row;
                }

                &:nth-child(9n+4) {
                    float: right;
                    .big-row;
                }

                &:nth-child(9n+5) {
                    float: left;
                    .small-row;
                }

                &:nth-child(9n+6) {
                    float: left;
                    .small-row;
                }

                &:nth-child(9n+7) {
                    float: left;
                    .big-row;
                }

                &:nth-child(9n+8) {
                    float: right;
                    .small-row;
                }

                &:nth-child(9n+9) {
                    float: right;
                    .small-row;
                }
                .mask {
                    display: none;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: #111;
                    opacity: 0.8;
                    .title {
                        position: absolute;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        display: inline-block;
                        font-size: 30px;
                        color: #fff;
                    }
                    .line {
                        position: absolute;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        height: 0;
                        border-bottom: 3px solid #fff;
                    }
                    .sub-title {
                        position: absolute;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        display: inline-block;
                        font-size: 20px;
                        color: #fff;
                    }
                }
            }
        }
        .mg-middle {
            .img-group {
                margin: 0 auto;
                overflow: hidden;
                width: 1890px;
                background-color: black;
                &:hover {
                    cursor: pointer;
                }
            }
            .img-item {
                position: relative;
                display: block;
                margin: 15px;
                img {
                    width: 100%;
                    height: 100%;
                }
                &.big-row {
                    width: 1860px;
                }

                &.small-row {
                    width: 915px;
                }
                &:nth-child(9n+1) {
                    float: left;
                    .big-row;
                }

                &:nth-child(9n+2) {
                    float: left;
                    .small-row;
                }

                &:nth-child(9n+3) {
                    float: right;
                    .small-row;
                }

                &:nth-child(9n+4) {
                    float: left;
                    .big-row;
                }

                &:nth-child(9n+5) {
                    float: left;
                    .small-row;
                }

                &:nth-child(9n+6) {
                    float: left;
                    .small-row;
                }

                &:nth-child(9n+7) {
                    float: right;
                    .big-row;
                }

                &:nth-child(9n+8) {
                    float: left;
                    .small-row;
                }

                &:nth-child(9n+9) {
                    float: right;
                    .small-row;
                }
                .mask {
                    display: none;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: #111;
                    opacity: 0.8;
                    .title {
                        position: absolute;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        display: inline-block;
                        font-size: 30px;
                        color: #fff;
                    }
                    .line {
                        position: absolute;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        width: 20%;
                        height: 0;
                        border-bottom: 3px solid #fff;
                    }
                    .sub-title {
                        position: absolute;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        display: inline-block;
                        font-size: 20px;
                        color: #fff;
                    }
                }
            }
        }
        .mg-small {
            .img-item {
                position: relative;
                display: block;
                margin: 15px 40px 15px 40px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }

        .view-more {
            margin: 0 auto;
            overflow: hidden;
            padding-bottom: 55px;
            .arrow {
                margin: 15px auto 30px auto;
                display: block;
                width: 28px;
                height: 18px;
                background: url("../img/arrow.png") no-repeat;
                background-size: contain;
            }
            font-size: 22px;
            text-align: center;
            color: #fff;
        }
    }
</style>
