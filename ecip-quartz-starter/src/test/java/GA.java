import com.baomidou.mybatisplus.annotation.DbType;
import com.baomidou.mybatisplus.generator.AutoGenerator;
import com.baomidou.mybatisplus.generator.InjectionConfig;
import com.baomidou.mybatisplus.generator.config.DataSourceConfig;
import com.baomidou.mybatisplus.generator.config.GlobalConfig;
import com.baomidou.mybatisplus.generator.config.PackageConfig;
import com.baomidou.mybatisplus.generator.config.StrategyConfig;
import com.baomidou.mybatisplus.generator.config.rules.NamingStrategy;
import org.junit.Test;

/**
 * @author : zhuangjing
 * file : GeneratorServiceEntity.java
 * date : 2018-08-22
 * time : 12:25
 */
public class GA {

    @Test
    public void generateCode() {
        String packageName = "com.hgsoft.ecip.quartz";
        boolean serviceNameStartWithI = false;//user -> UserService, 设置成true: user -> IUserService
//        generateByTables(serviceNameStartWithI, packageName, "SYSR_USER", "SYSR_ROLE", "SYSR_RESOURCE", "SYSR_USER_ROLE", "SYSR_ROLE_RESOURCE");
//        generateByTables(serviceNameStartWithI, packageName, "SYSR_REGISTER_APP");
        // generateByTables(serviceNameStartWithI, packageName, "ECIP_OPRATION_LOG");
//        generateByTables(serviceNameStartWithI, packageName, "ECIP_DICT");
        generateByTables(serviceNameStartWithI, packageName, "qrtz_jobAndTrigger");

    }

    private void generateByTables(boolean serviceNameStartWithI, String packageName, String... tableNames) {
        GlobalConfig config = new GlobalConfig();
        String dbUrl = "jdbc:mysql://192.168.65.130:3306/springboot-quartz?useUnicode=true&characterEncoding=utf-8&zeroDateTimeBehavior=convertToNull";
        DataSourceConfig dataSourceConfig = new DataSourceConfig();
        dataSourceConfig
            .setDbType(DbType.MYSQL)
            .setDriverName("com.mysql.jdbc.Driver")
            .setUrl(dbUrl)
            .setUsername("root")
            .setPassword("123456");
        StrategyConfig strategyConfig = new StrategyConfig();
        strategyConfig
            .setEntityLombokModel(true)
            .setCapitalMode(true)
//                .setDbColumnUnderline(true)
            .setRestControllerStyle(true)
            .setNaming(NamingStrategy.underline_to_camel)
            .setInclude(tableNames);//修改替换成你需要的表名，多个表名传数组
        config.setActiveRecord(false)
            .setAuthor("zhuangjing")
            .setOutputDir("/home/zhuangjing/我的代码/ecip/ecip-quartz-starter/src/main/java")
            .setFileOverride(true);
        if (!serviceNameStartWithI) {
            config.setServiceName("%sService");
        }
        config.setBaseResultMap(true);
        config.setBaseColumnList(true);
        config.setActiveRecord(false);
        config.setFileOverride(true);
        config.setOpen(false);
//        config.setIdType(IdType.INPUT);
        InjectionConfig cfg = new InjectionConfig() {
            @Override
            public void initMap() {

            }
        };
        /*List<FileOutConfig> focList = new ArrayList<FileOutConfig>();
        // 调整 xml 生成目录演示
        focList.add(new FileOutConfig("/mybatis/template/mapper.xml.vm") {
            @Override
            public String outputFile(TableInfo tableInfo) {
                return "C:\\deployment\\IdeaProject\\ecip\\ecip-web\\src\\main\\java\\com\\hgsoft\\ecip\\web\\rbac\\mapper\\"
                        + tableInfo.getEntityName() + "Mapper.xml";
            }
        });
        cfg.setFileOutConfigList(focList);
        TemplateConfig tc = new TemplateConfig();
        tc.setXml(null);*/

        new AutoGenerator().setGlobalConfig(config)
            .setCfg(cfg)
//                .setTemplate(tc)
            .setDataSource(dataSourceConfig)
            .setStrategy(strategyConfig)
            .setPackageInfo(
                new PackageConfig()
                    .setParent(packageName)
                    .setController("controller")
                    .setXml("mapper")
                    .setEntity("entity")
            ).execute();
    }

    private void generateByTables(String packageName, String... tableNames) {
        generateByTables(true, packageName, tableNames);
    }
}

