CREATE TABLE IF NOT EXISTS `relationships`(
`model_id`  int(11)         NOT NULL AUTO_INCREMENT     COMMENT 'Model ID for identification',
`model`     varchar(100)    NOT NULL                    COMMENT 'Model File, .obj/.stl/.glb/.gltf',
`metadata`  varchar(100)    DEFAULT NULL                COMMENT 'Metadata JSON file',
PRIMARY KEY (`model_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COMMENT='File Relationships';