<template>
    <section class="page-advertising">
        <div class="advertising advertising-large">
            <div class="img-group">
                <div class="img-item small-col"
                     data-type="advertising"
                     v-show="showImg('large',index) || showAll"
                     v-for="(value, index) in imgArr">
                    <div class="img-wrap" @click="goToDetail(value.gid)">
                        <img :src="chooseImg('large',index)">
                        <div class="mask">
                            <div class="title" v-text="value.title"></div>
                            <div class="line"></div>
                            <div class="sub-title">APP宣传片</div>
                        </div>
                    </div>
                    <div class="sub-content">
                        <div class="content-title" v-text="value.title"></div>
                        <div class="content" v-html="htmlEntityDecode(value.content)"></div>
                    </div>
                </div>
            </div>
            <div class="view-more" @click="viewMore('large')" v-if="!showAll">
                <i class="arrow"></i>
                查看全部作品
            </div>
        </div>
    </section>
</template>

<script>

    export default {
        name: 'all',
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
                    'large': 11,
                    'middle': 11
                },
                showAll: false
            }
        },
        components: {},
        methods: {
            htmlEntityDecode(value){
                return value
                        .replace(value ? /&(?!#?\w+;)/g : /&/g, '&amp;')
                        .replace(/&lt;/g, "<")
                        .replace(/&gt;/g, ">")
                        .replace(/&quot;/g, "\"")
                        .replace(/&#39;/g, "\'");
            },
            chooseImg(size, index) {
                if (size === 'large') {
                    return this.url[index];
                }
                else if (size === 'middle') {
                    return this.url[index];
                }
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
            $('.advertising .img-wrap').each(function (index, item) {
                let $mask = $(this).find('.mask');
                let $title = $(this).find('.title');
                let $line = $(this).find('.line');
                let $subTitle = $(this).find('.sub-title');
                $(item).hover(function () {
                            let $width = $(item).width();
                            let $height = $(item).height();
                            $mask.fadeIn(350);
                            $title.css('top', $height / 2 - $title.height() - 10);
                            $line.css('left', $width / 2 - 10);
                            $subTitle.css('bottom', $height / 2 - $title.height() - 25);
                            $line.width($title.width());
                            $title.animate({top: '+=10px'}, 350, 'easeInOutCubic');
                            $line.animate({left: '+=10px'}, 350, 'easeInOutCubic');
                            $subTitle.animate({bottom: '+=15px'}, 350, 'easeInOutCubic');
                        },
                        function () {
                            let $width = $(item).width();
                            let $height = $(item).height();
                            $mask.fadeOut(350);
                            $title.animate({top: '+=7px'}, 350, 'easeInOutCubic', function () {
                                $title.css('top', $height / 2 - $title.height() - 10);
                            });
                            $line.animate({left: '+=10px'}, 350, 'easeInOutCubic', function () {
                                $line.css('left', $width / 2 - 10);
                            });
                            $subTitle.animate({bottom: '+=7px'}, 350, 'easeInOutCubic', function () {
                                $subTitle.css('bottom', $height / 2 - $title.height() - 25);
                            });
                        })
            });
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
    .page-advertising {
        font-family: SourceHanSansCN-Regular;
        .advertising-large {
            .img-group {
                width: 1860px;
                cursor: default;
                margin: 0 auto;
            }
            .img-item {
                letter-spacing: -5px;
                font-size: 0;
                position: relative;
                display: block;
                padding-top: 15px;
                padding-bottom: 15px;
                .img-wrap {
                    cursor: pointer;
                    letter-spacing: normal;
                    display: inline-block;
                    position: relative;
                    width: 1230px;
                    height: 690px;
                    img {
                        width: 100%;
                        height: 100%;
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
                            left: 50%;
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

                &.small-col {

                }
                .sub-content {
                    padding-left: 30px;
                    letter-spacing: normal;
                    vertical-align: top;
                    display: inline-block;
                    cursor: default;
                    width: 600px;
                    color: #fff;
                    .content-title {
                        text-align: left;
                        margin-bottom: 30px;
                        font-size: 36px;
                    }
                    .content {
                        line-height: 2em;
                        text-align: left;
                        font-size: 18px;
                    }
                }
            }
        }
        .view-more {
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
