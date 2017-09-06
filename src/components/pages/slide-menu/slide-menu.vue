<template>
    <section>
        <div class="mobile-sub-menu">
            <i class="close-btn" @click="hideMenu"></i>
            <ul @click="choose($event)">
                <li class="menu-all" data-name="all" :class="{'light-up': choosed === 'all'}">
                    <span>All</span><span>全部</span></li>
                <li class="menu-motiongraphic" data-name="motiongraphic"
                    :class="{'light-up': choosed === 'motiongraphic'}"><span>MotionGraphic</span><span>MG动画</span></li>
                <li class="menu-h5" data-name="h5" :class="{'light-up': choosed === 'h5'}">
                    <span>H5</span><span>H5</span></li>
                <li class="menu-advertising" data-name="advertising" :class="{'light-up': choosed === 'advertising'}">
                    <span>Advertising</span><span>广告</span></li>
                <li class="menu-shooting" data-name="shooting" :class="{'light-up': choosed === 'shooting'}"><span>Shooting</span><span>拍摄</span>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    export default {
        data(){
            return {
                choosed: 'all'
            }
        },
        methods: {
            choose(e){
                let li = $('li');
                li.children(':first-child').show();
                li.children(':last-child').hide();
                let target = $(e.target);
                let aim;
                this.choosed = target.data('name') || target.parent().data('name');
                if (target.data('name')) {
                    aim = target;
                } else {
                    aim = target.parent();
                }
                aim.children(':first').hide();
                aim.children(':last').show();
                this.$emit('selectChange', this.choosed);
            },
            hideMenu(){
                this.$emit('hideMenu');
            }
        }
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped rel="stylesheet/less">
    .mobile-sub-menu {
        font-family: Neosans;
        font-size: 36px;
        letter-spacing: 3px;
        line-height: 2.5em;
        color: #808080;
        padding: 350px 0 0 130px;
        margin-left: -550px;
        height: calc(1334px - 350px);
        width: 420px;
        position: absolute;
        i {
            display: block;
            position: absolute;
            top: 65px;
            left: 35px;
            width: 36px;
            height: 36px;
            background: url("./img/x.png");
            background-size: 100% 100%;
        }
        li {
            :first-child {
                display: inline;
            }
            :last-child {
                display: none;
            }
        }
        .light-up {
            color: #fff;
        }
    }
</style>