package com.example.hibia.service;

import com.example.hibia.advice.exception.CNotOwnerException;
import com.example.hibia.advice.exception.CResourceNotExistException;
import com.example.hibia.advice.exception.CUserNotFoundException;
import com.example.hibia.domain.Cart;
import com.example.hibia.domain.Item;
import com.example.hibia.domain.Review;
import com.example.hibia.domain.User;
import com.example.hibia.dto.CartDTO;
import com.example.hibia.repository.CartRepository;
import com.example.hibia.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class CartService {

    private final CartRepository cartRepository;
    private final UserService userService;
    private final ItemService itemService;

    public List<Cart> findAllCartItems(String email,Long id){//장바구니 전체 조회
        Cart cart = findCartItem(id);
        User user = cart.getUser();
        if(!email.equals(user.getEmail()))
            new CNotOwnerException();
        return cartRepository.findByUser(userService.findUser(email));
    }

    public Cart findCartItem(Long id){//단건조회
        return cartRepository.findById(id).orElseThrow(CResourceNotExistException::new);
    }

    public Cart createCartItem(String name, String email, CartDTO cartDTO){//장바구니 추가
        Item item = itemService.findItem(name);
        Cart cart = new Cart(userService.findUser(email), item, cartDTO.getQuantity());

        return cartRepository.save(cart);
    }

    public Cart updateCartItem(Long id, String uid, CartDTO cartDTO){//장바구니 수정
        Cart cart = findCartItem(id);
        User user = cart.getUser();
        if (!uid.equals(user.getEmail())){
            new CUserNotFoundException();
        }

        cart.setCart(cartDTO.getQuantity());
        return cart;
    }

    public boolean deleteCartItem(Long id, String uid){//장바구니 내용 삭제
        Cart cart = findCartItem(id);
        User user = cart.getUser();
        if (!uid.equals(user.getEmail())){
            new CUserNotFoundException();
        }
        cartRepository.delete(cart);

        return true;
    }
}
