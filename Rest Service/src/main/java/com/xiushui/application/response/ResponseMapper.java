package com.xiushui.application.response;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.factory.Mappers;

import com.xiushui.application.entity.UserDonate;

@Mapper
public interface ResponseMapper
{
	ResponseMapper INSTANCE = Mappers.getMapper(ResponseMapper.class);
	
	@Mappings({
        @Mapping(target = "userId", source = "userDonate.userInfo.id"),
        @Mapping(target = "userName", source = "userDonate.userInfo.name"),
        @Mapping(target = "userType", source = "userDonate.userInfo.type"),
        @Mapping(target = "userPhone", source = "userDonate.userInfo.phone"),
        @Mapping(target = "userEmail", source = "userDonate.userInfo.email"),
        @Mapping(target = "userAddress", source = "userDonate.userInfo.address"),
        @Mapping(target = "category", source = "userDonate.category.name")
    })
	RespGetAllUserDonateInfo convert(UserDonate userDonate);
	
	List<RespGetAllUserDonateInfo> convertList(List<UserDonate> userDonate);
}
