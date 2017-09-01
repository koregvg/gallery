<template>
    <section class="header-nav">
        <div class="header-nav-in" :class="type">
            <div v-if="type === 'large' || type === 'middle'">
                <ul class="main">
                    <li @click="choose('index')" :class="{'light-up': choosed === 1}">Work</li>
                    <li @click="choose('about')" :class="{'light-up': choosed === 2}">About</li>
                    <li @click="choose('joinus')" :class="{'light-up': choosed === 3}">Join us</li>
                </ul>
                <transition name="fade">
                    <ul class="work-sublist" v-show="choosed === 1">
                        <li @mouseenter="enter($event)" @mouseleave="leave($event)"
                            v-for="(value, key, index) in sublist">
                            <div class="en" :class="{'light-up':dataSubChoosed == index+1}"
                                 @click="subSelect(key.toLowerCase(),index+1)">{{key}}
                            </div>
                            <div class="cn" @click="subSelect(key.toLowerCase(),index+1)">{{value}}</div>
                        </li>
                    </ul>
                </transition>
            </div>
            <div v-if="type === 'small'">
                <div class="header-title">FIFTYSTUDIO</div>
                <ul class="main">
                    <li @click="choose('index')" :class="{'light-up': choosed === 1}">Work</li>
                    <li @click="choose('about')" :class="{'light-up': choosed === 2}">About</li>
                    <li @click="choose('joinus')" :class="{'light-up': choosed === 3}">Join us</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>


    export default {
        name: 'header-nav',
        props: {
            type: {
                type: String,
                required: false,
                default: 'large'
            },
            lightNum: {
                type: Number,
                required: false,
                default: 0
            },
            subChoosed: {
                type: Number,
                required: false,
                default: 0
            }
        },
        data () {
            return {
                choosed: this.lightNum,
                dataSubChoosed: this.subChoosed,
                sublist: {
                    'All': '全部',
                    'MotionGraphic': 'MG动画',
                    'H5': 'H5',
                    'Advertising': '广告',
                    'Shooting': '拍摄'
                },
                showList: false
            }
        },
        methods: {
            subSelect(key, index) {
                this.dataSubChoosed = index;
                this.selected = key;
                this.$emit('selectChange', key);
            },
            choose(type) {
                $(window).scrollTop(0);
                if (type === 'index') {
                    this.choosed = 1;
                    this.showList = true;
                    type = 'all'
                }
                else if (type === 'about') {
                    this.choosed = 2;
                    this.showList = false;
                }
                else if (type === 'joinus') {
                    this.choosed = 3;
                    this.showList = false;
                }
                this.$emit('selectChange', type);
            },
            enter(event) {
                let $el = $(event.target);
                $el.find('.cn').fadeIn(250);
                $el.find('.en').fadeOut(250);
            },
            leave(event) {
                let $el = $(event.target);
                $el.find('.en').fadeIn(250);
                $el.find('.cn').fadeOut(250);
            }
        },
        components: {},
        activated(){

        },
        mounted() {
            let subMap = {
                'all': 1,
                'motiongraphic': 2,
                'h5': 3,
                'advertising': 4,
                'shooting': 5
            };
            let from = this.$route.query.from || '';
            if (this.$route.path === '/index' && from) {
                this.choosed = 1;
                this.showList = true;
            }
            let to = this.$route.query.to || '';
            if (this.$route.path === '/index' && to) {
                this.dataSubChoosed = subMap[to];
                this.showList = true;
                this.$emit('selectChange', to);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
    .header-nav {
        .header-nav-in {
            z-index: 2;
            position: fixed;
            background-color: black;
            width: 100%;
            &.large,&.middle {
                height: 100px;
                z-index: 2;
                position: fixed;
                background-color: black;
                width: 100%;
                padding: 30px 30px 0 30px;
                ul.main {
                    width: 100%;
                    height: 48px;
                    li {
                        height: 100%;
                        line-height: 48px;
                        display: block;
                        float: left;
                        color: #808080;
                        margin-right: 20px;
                        font-family: Neosans;
                        font-size: 36px;
                        &:hover {
                            color: #fff;
                            cursor: pointer;
                        }
                        &.light-up {
                            color: #fff;
                        }
                    }
                }
                ul.work-sublist {
                    width: 100%;
                    height: 48px;
                    li {
                        top: -2px;
                        cursor: pointer;
                        position: relative;
                        text-align: center;
                        height: 100%;
                        line-height: 48px;
                        display: inline-block;
                        float: left;
                        color: #808080;;
                        margin-right: 35px;
                        font-size: 22px;
                        .light-up {
                            color: #fff;
                        }
                        div {
                            position: absolute;
                            width: 100%;
                            &.en {
                                font-family: Neosans;
                            }
                            &.cn {
                                font-family: SourceHanSansCN-Regular;
                                color: #fff;
                                display: none;
                            }
                        }
                        &:nth-child(1) {
                            width: 50px;
                        }
                        &:nth-child(2) {
                            width: 160px;
                        }
                        &:nth-child(3) {
                            width: 30px;
                        }
                        &:nth-child(4) {
                            width: 120px;
                        }
                        &:nth-child(5) {
                            width: 100px;
                        }
                    }
                }
            }
            &.small {
                padding: 35px 40px 35px 40px;
                .title {
                    text-align: center;
                }
                ul.main {
                    width: 100%;
                    height: 48px;
                    li {
                        height: 100%;
                        line-height: 48px;
                        display: block;
                        float: left;
                        color: #808080;
                        margin-right: 20px;
                        font-family: Neosans;
                        font-size: 36px;
                        &:hover {
                            color: #fff;
                            cursor: pointer;
                        }
                        &.light-up {
                            color: #fff;
                        }
                    }
                }
                ul.work-sublist {
                    width: 100%;
                    height: 48px;
                    li {
                        top: -2px;
                        cursor: pointer;
                        position: relative;
                        text-align: center;
                        height: 100%;
                        line-height: 48px;
                        display: inline-block;
                        float: left;
                        color: #808080;;
                        margin-right: 35px;
                        font-size: 22px;
                        .light-up {
                            color: #fff;
                        }
                        div {
                            position: absolute;
                            width: 100%;
                            &.en {
                                font-family: Neosans;
                            }
                            &.cn {
                                font-family: SourceHanSansCN-Regular;
                                color: #fff;
                                display: none;
                            }
                        }
                        &:nth-child(1) {
                            width: 50px;
                        }
                        &:nth-child(2) {
                            width: 160px;
                        }
                        &:nth-child(3) {
                            width: 30px;
                        }
                        &:nth-child(4) {
                            width: 120px;
                        }
                        &:nth-child(5) {
                            width: 100px;
                        }
                    }
                }
            }
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */
    {
        opacity: 0

    }
</style>
